const autocomplete = (
  search: string,
  items: string[],
  maxResult: number
): string[] => {
  //ฟิวเตอร์ items
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  filteredItems.sort((a, b) => {
    const indexA = a.toLowerCase().indexOf(search.toLowerCase());
    const indexB = b.toLowerCase().indexOf(search.toLowerCase());

    //เรียง
    if (indexA !== indexB) {
      return indexA - indexB;
    }
    return a.localeCompare(b);
  });

  //ตัดเอาเท่า maxResult
  return filteredItems.slice(0, maxResult);
};

//Test case
console.log(
  autocomplete("th", ["Mother", "Think", "Worthy", "Apple", "Android"], 2)
); //["Think", "Mother"]
console.log(
  autocomplete("ch", ["Touch", "Chat", "Cat", "Chair", "Teacher"], 3)
); //["Chair", "Chat", "Teacher"]
