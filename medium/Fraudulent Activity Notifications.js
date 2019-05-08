function findMedian(arr, d) {
    if(d % 2 == 1) {
        const medIdx = Math.floor(d/2);
        let start = -1;
        let curIdx = 0;
        while(curIdx <= medIdx) {
            start += 1;
            curIdx += arr[start];

        }
        return start;
    } else {
        const medIdx2 = Math.floor(d/2);
        const medIdx1 = Math.floor(d/2) - 1;
        let start = -1;
        let curIdx = 0;
        while(curIdx <= medIdx1) {
            start += 1;
            curIdx += arr[start];
        }
        const index1 = start;
        while(curIdx <= medIdx2) {
            start += 1;
            curIdx += arr[start];
        }
        const index2 = start;
        return (index1 + index2) / 2
    }
}

function activityNotifications(expenditure, d) {
    let n = expenditure.length;
    let notifications = 0;
    if(d >= n) {
        return 0;
    }
    let memory = new Array(201);
    memory.fill(0);

    for(let i = 0; i < d; i++) {
        memory[expenditure[i]] += 1;
    }

    for (let i = d; i < expenditure.length; i++ ) {
        const median = findMedian(memory, d);
        if(expenditure[i] >= 2 * median ) {
            notifications += 1;
        }
        memory[expenditure[i-d]] -= 1;
        memory[expenditure[i]] += 1;
    }
    return notifications;   
}
