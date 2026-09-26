const getQuizSummary = (scores: number[]) : { total: number; average: number } => {
    const total = scores.reduce((sum, score) => sum + score, 0);
    const average = scores.length > 0 ? total / scores.length : 0;
    return { "total": total, "average": average };
};