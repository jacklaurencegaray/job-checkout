
module.exports = {
    pricify: num => {
        num = num.toString()
        num = num.slice(0, (num.indexOf("."))+3)
        return Number(num)
    }
}
