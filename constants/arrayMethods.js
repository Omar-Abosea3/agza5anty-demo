export const getPartsOfArray = (data, size)=>{
    const result = [];
    for (let i = 0; i < data.length; i += size) {
      const parts = data.slice(i, i + size);
      result.push(parts);
    }
    return result;
}