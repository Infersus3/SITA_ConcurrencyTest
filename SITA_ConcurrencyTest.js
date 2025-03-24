async function fetchWithConcurrency(urls, MAX_CONCURRENCY) {
    const results = new Array(urls.length);
    let index = 0;
  
    async function worker() {
      while (index < urls.length) {
        const currentIndex = index++;
        const url = urls[currentIndex];
        try {
          const res = await fetch(url);
          results[currentIndex] = res;
        } catch (error) {
          results[currentIndex] = error;
        }
      }
    }
  
    const workers = Array(Math.min(MAX_CONCURRENCY, urls.length))
      .fill(null)
      .map(() => worker());
  
    await Promise.all(workers);
    return results;
  }
  