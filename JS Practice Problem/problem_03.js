function countHashtags(caption) {
  if (typeof caption !== "string") {
    return "Invalid";
  }

  let hashtagCount = 0;
  let longestTag = "";
  const words = caption.split(" ");

  for (let word of words) {
    if (word.startsWith("#")) {
      hashtagCount++;
      const tagName = word.slice(1);

      if (tagName.length > longestTag.length) {
        longestTag = tagName;
      }
    }
  }

  return { hashtagCount: hashtagCount, longestTag: longestTag };
}
