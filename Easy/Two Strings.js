function twoStrings(s1, s2) {
    for (let i in s2) {
        if (s1.includes(s2[i])) {
            return "YES";
        }
    }
    return "NO";
}
