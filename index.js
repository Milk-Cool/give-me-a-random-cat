const randomElement = array => array[Math.floor(Math.random() * array.length)];
const cats = [
	"😺️",
	"=^._.^= ∫",
	" ฅ(＾・ω・＾ฅ)",
	" (=｀ェ´=)",
	" (=^-ω-^=)",
	" (^つωฅ^)",
	"(=´∇｀=)",
	"（Φ ω Φ）",
	" (ꏿ ᆺ ꏿ)",
	" ( ⓛ ω ⓛ *)",
	"/ᐠ｡ꞈ｡ᐟ\\",
	"/ᐠ. ｡.ᐟ\\ᵐᵉᵒʷˎˊ˗",
	" ฅ/ᐠ｡ᆽ｡ᐟ \\",
	"චᆽච",
	" (=◉ᆽ◉=)",
	"₍⸍⸌̣ʷ̣̫⸍̣⸌₎",
	"ⓛⰙⓛฅ",
	"̷(̷ ̷ ̷ ̷ⓛ̷ ̷ ̷ ̷ﻌ̷ ̷ ̷ ̷ⓛ̷ ̷ ̷ ̷*̷ ̷)̷",
];

function giveMeARandomCat(){
	return randomElement(cats);
}
giveMeARandomCat.noActuallyGiveMeAllCatsYouHaveBecauseIDoReallyNeedThemALot = cats;
module.exports = giveMeARandomCat;
