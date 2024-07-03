class ReverseEncoder {
  //encode
  encode(text: string): string {
    //สลับตัวอักษร
    const reversedText = text
      .split("")
      .map((char) => this.reverseChar(char))
      .join("");
    console.log("reversedText: " + reversedText);
    //สลับคำ
    return reversedText.split(" ").reverse().join(" ");
  }

  // decode
  decode(text: string): string {
    //สลับคำ
    const reversedWords = text.split(" ").reverse().join(" ");
    //สลับตัวอักษร
    return reversedWords
      .split("")
      .map((char) => this.reverseChar(char))
      .join("");
  }

  //ฟังก์ชันสลับตัวอักษร
  private reverseChar(char: string): string {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const reversedAlphabet = "zyxwvutsrqponmlkjihgfedcba";

    const index = alphabet.indexOf(char.toLowerCase());
    if (index === -1) {
      // ถ้าไม่ใช่ร a-z ให้คืนค่าเดิม
      return char;
    }

    return reversedAlphabet[index];
  }
}

// test case
const reverseEncoder = new ReverseEncoder();
console.log(reverseEncoder.encode("Hello world")); //"dliow svool"
console.log(reverseEncoder.decode("dliow svool")); //"Hello world"
console.log(reverseEncoder.encode("abcdefghijklmnopqrstuvwxyz")); //"zyxwvutsrqponmlkjihgfedcba"
console.log(reverseEncoder.encode("I love you")); //"blf olev r"
console.log(reverseEncoder.decode("blf olev r")); //"I love you"
