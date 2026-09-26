type light = 'red' | 'yellow' | 'green';

const getTrafficAction = (light : light) : string => {
    if(light === 'red') {
        return 'Stop';
    } else if(light === 'yellow') {
        return 'Slow Down';
    } else if(light === 'green') {
        return 'Go';
    }
};