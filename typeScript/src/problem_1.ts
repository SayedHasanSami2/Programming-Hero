

const getBatteryStatus = (percentage: number): string => {




    if(percentage >= 91 && percentage <= 100) {

        return 'Full';

    } else if(percentage >= 51 && percentage <= 90) {

        return 'High';

    } else if(percentage >= 21 && percentage <= 50) {

        return 'Medium';

    } else {

        return 'Low';

    }

};