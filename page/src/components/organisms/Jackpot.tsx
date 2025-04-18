"use client"
import { useProducts } from "@/hooks/useProducts";
import { iGift, iTitle } from "@/interfaces";
import { useEffect, useRef, useState } from "react";
import { FaArrowsSpin } from "react-icons/fa6";
import Button from "../atoms/Button";
import Title from "../cells/Title";

type JackpotProps = {
  gifts: iGift[];
  title: iTitle;
  chances_of_winning?: number
};


const Jackpot = ({ data }: { data: JackpotProps }) => {
  const { gifts, title, chances_of_winning } = data
  const doorRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [isSpinning, setIsSpinning] = useState(false)
  const [isSpinningComplete, setIsSpinningComplete] = useState(false)
  const { setGiftWinner, isConfettiExploding, setIsConfettiExploding, isGiftTaken } = useProducts()
  const [newItems, setNewItems] = useState<iGift[]>()

  const handleFavoriteToWin = (gifts: iGift[]): iGift => {
    const randomIndex = Math.floor(Math.random() * gifts.length);
    return gifts[randomIndex];
  };

  const handleWinnerPrize = () => {
    const ids: string[] = [];

    doorRefs.current.forEach((door) => {
      if (!door) return;

      const img = door.querySelector("img");
      if (img && img.id) {
        ids.push(img.id);
      }
    });

    const allEqual = ids.every((id) => id === ids[0]);

    const giftWinner = gifts.filter((item) => item.name === ids[0])[0]
    setIsConfettiExploding(allEqual)
    if (allEqual) {
      setGiftWinner(giftWinner)
    }
    return ids;
  };

  const isDisabled = isGiftTaken;
  const buttonText = isSpinning
    ? "Spinning..."
    : isSpinningComplete
      ? isGiftTaken
        ? "Congratulations!"
        : "Spin Again"
      : "Spin Now";

  const handleClick = () => {
    if (isSpinning || isGiftTaken) return;
    init();
    spin();
  };


  const shuffle = (arr: any[]) => {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  };

  const init = (firstInit = true, groups = 1, duration = 1) => {
    setIsSpinningComplete(false)
    setIsConfettiExploding(false)
    doorRefs.current.forEach((door) => {
      if (!door) return;

      if (firstInit) {
        door.dataset.spinned = "0";
      } else if (door.dataset.spinned === "1") {
        return;
      }

      const oldBoxes = door.querySelector(".boxes");
      const boxesClone = document.createElement("div");
      boxesClone.className = "boxes";

      let pool: (string | iGift)[] = ["❓"];

      if (!firstInit) {
        const arr: iGift[] = [];

        for (let n = 0; n < groups; n++) {
          arr.push(...(newItems ?? []));
        }
        pool.push(...shuffle(arr));

        boxesClone.addEventListener(
          "transitionstart",
          function () {
            door.dataset.spinned = "1";
            this.querySelectorAll(".box").forEach((box) => {
              (box as HTMLElement).style.filter = "blur(1px)";
            });
          },
          { once: true }
        );

        boxesClone.addEventListener(
          "transitionend",
          function () {
            this.querySelectorAll(".box").forEach((box, index) => {
              (box as HTMLElement).style.filter = "blur(0)";
              if (index > 0) this.removeChild(box);
            });
          },
          { once: true }
        );
      }



      for (let i = pool.length - 1; i >= 0; i--) {
        const box = document.createElement("div");
        box.className = "box";

        if (typeof pool[i] === "string") {
          box.innerHTML = pool[i] as string;
        } else {
          const gift = pool[i] as iGift;
          box.innerHTML = `<img src="${gift.image}" id="${gift.name}" class="object-contain w-2/3 h-2/3" alt="${gift.name}" />`;
        }

        box.style.width = `${door.clientWidth}px`;
        box.style.height = `${door.clientHeight}px`;
        boxesClone.appendChild(box);
      }

      boxesClone.style.transitionDuration = `${duration}s`;
      boxesClone.style.transform = `translateY(-${door.clientHeight * (pool.length - 1)
        }px)`;

      if (oldBoxes) {
        door.replaceChild(boxesClone, oldBoxes);
      } else {
        door.appendChild(boxesClone);
      }
    });
  };

  const spin = async () => {
    setIsSpinning(true)
    setIsSpinningComplete(false)
    init(false, 1, 2);
    for (const door of doorRefs.current) {
      if (!door) continue;
      const boxes = door.querySelector(".boxes") as HTMLElement;
      const duration = parseFloat(boxes.style.transitionDuration);
      boxes.style.transform = "translateY(0)";
      await new Promise((resolve) => setTimeout(resolve, duration * 1000));
    }
    setIsSpinning(false)
    setIsSpinningComplete(true)
    handleWinnerPrize()
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    setNewItems(() => {
      const favoriteToWin = handleFavoriteToWin(gifts);
      let newItems = [...gifts];

      let _chances_of_winning = chances_of_winning || 2
      _chances_of_winning = _chances_of_winning * gifts.length

      if (favoriteToWin) {
        newItems = [...newItems, ...Array(_chances_of_winning).fill(favoriteToWin)];
      }

      return newItems;
    });
  }, [isSpinningComplete]);


  useEffect(() => {
    if (isConfettiExploding) {
      const timeout = setTimeout(() => {
        setIsConfettiExploding(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [isConfettiExploding]);


  return (
    <section id="jackpot" className="max-w-2lg mx-auto">
      <Title title={title} />
      <div className="doors">
        {[0, 1, 2].map((_, index) => (
          <div
            className="door"
            key={index}
            ref={(el) => {
              doorRefs.current[index] = el;
            }}
          >
            <div className="boxes" />
          </div>
        ))}
      </div>


      <div className="mt-4 flex justify-center">
        <Button
          classes={`bg-primary ${isDisabled ? 'opacity-60 pointer-events-none' : ''}`}
          text={buttonText}
          callback={handleClick}
          icon={<FaArrowsSpin className="text-2xl" />}
        />
      </div>
    </section>
  );
};

export default Jackpot;
