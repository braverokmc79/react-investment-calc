// 이 함수는 JS 객체를 인수로 기대합니다.
// 객체에는 다음 속성이 포함되어야 합니다.
// -initialInvestment: 초기 투자 금액
// - AnnualInvestment : 매년 투자한 금액
// - ExpectReturn: 예상(연간) 수익률
// - 기간: 투자 기간(기간)
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration
}) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1, // 연도 식별자
      interest: interestEarnedInYear, // 올해 벌어들인 이자 금액
      valueEndOfYear: investmentValue, // 연말 투자 가치
      annualInvestment: annualInvestment // 올해 추가된 투자
    });
  }

  return annualData;
}

// 브라우저에서 제공하는 Intl API는 포맷터 객체를 준비하는 데 사용됩니다.
// 이 객체는 숫자를 통화 형식으로 지정하는 데 사용할 수 있는 "format()" 메서드를 제공합니다.
// 사용 예: formatter.format(1000) => "$1,000"을 산출합니다.
//export const formatter = new Intl.NumberFormat("en-US", {
export const formatter = new Intl.NumberFormat("ko-KR", {
  style: "currency",
  //currency: "USD",
  currency: 'KRW',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});
