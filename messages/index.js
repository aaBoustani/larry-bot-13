const request = require('request')

const token = process.env.APP_ACCESS_TOKEN

function sendTextMessage(sender, text) {
    request({
	    url: 'https://graph.facebook.com/v2.6/me/messages',
	    qs: { access_token: token },
	    method: 'POST',
		json: {
		    recipient: { id:sender },
			message: { text },
		}
	}, function(error, response, body) {
		if (error) {
		    console.log('Error sending messages: ', error)
		} else if (response.body.error) {
		    console.log('Error: ', response.body.error)
	    }
    })
}

function sendHelp(sender) {
  const messageData = { 'text': 'Talk to Larry and tell me know how I can make him a better helper '}
}

module.exports = {
    sendTextMessage
}
