export function englishToPersianNumber(n: string | number): string {
  if (n == null) {
    return '0';
  }

  const farsiDigits: string[] = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  return n.toString().replace(/\d/g, x => farsiDigits[parseInt(x)]);
}