function calculateAiCost(tokensUsed) {
    // Write your code here.
    if (typeof tokensUsed !== 'number' || tokensUsed < 0) {
        return "Invalid";
    }
    if (tokensUsed <= 500) {
        return 0;
    }
    else {
        let totalTokenUsed = Math.floor((tokensUsed - 500) / 100);
        let bill = totalTokenUsed * 5;
        return bill;
    }
}