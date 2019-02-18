
module.exports = {
    capitalize: function(text) {
        if(text && text.length > 0)
            return text.substring(0,1).toLocaleUpperCase() + text.substring(1)
        return text
    }
}
