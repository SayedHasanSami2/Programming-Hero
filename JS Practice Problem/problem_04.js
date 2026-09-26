function bonusScore(scores) {
    // Write your code here
    if (!Array.isArray(scores) || scores.length === 0 || scores.some(score => typeof score !== 'number')) {
        return "Invalid";
    }
    const result = scores.map(score => { score += 10; return score; }).reduce((acc, current) => acc + current, 0);
    return result;
}