const { PI } = Math;

const circleArea = ((radius) => {
    let circleArea = PI * radius ** 2;
    console.log(circleArea);
});

const circumference = ((radius) => {
    let circumference = PI * radius * 2;
    console.log(circumference);
})

module.exports = {
    circleArea,
    circumference
}