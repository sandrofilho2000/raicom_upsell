async function api<T = any>(url: string): Promise<T | [] | boolean> {
      try {
      const res = await fetch(url);
  
      if (!res.ok) {
        console.log(`Erro HTTP: ${res.status} ${res.statusText}`);
        return [];
      }
  
      const data = await res.json();
      return data;
    } catch (error: any) {
      console.log('Erro na requisição:', error?.message || error);
      return false;
    }
  }
  
  export default api;
  