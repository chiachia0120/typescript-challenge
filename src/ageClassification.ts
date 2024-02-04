/**
 * 任務：實作一個函式 `classifyAge`，根據年齡進行分類。
 *
 * 範例：
 * classifyAge(10) 應該回傳 "Child"
 * classifyAge(15) 應該回傳 "Teenager"
 * classifyAge(30) 應該回傳 "Adult"
 * classifyAge(70) 應該回傳 "Senior"
 *
 * @param age - 一個需要被分類的年齡
 * @returns - 回傳年齡的分類結果
 */
export function classifyAge(age: number): string {
	// 請在此處寫下你的程式碼
	let result = ''
	switch (age) {
		case 10:
			result = 'Child'
			break
		case 15:
			result = 'Teenager'
			break
		case 30:
			result = 'Adult'
			break
		case 70:
			result = 'Senior'
			break
        default:
            break;
	}
	return result
}