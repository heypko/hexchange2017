from flask import Flask, request
from flask_restful import Resource, Api
from json import dumps
import RAKE

app = Flask(__name__)
api = Api(app)

class FindKeywords(Resource):
	def get(self):
		args = request.args
		print(args)
		sentence = args['sentence']
		Rake = RAKE.Rake(RAKE.SmartStopList())
		kwlist = Rake.run(sentence)
		result = {'keywords':kwlist}
		return result
		#We can have PUT,DELETE,POST here. But in our API GET implementation is sufficient

api.add_resource(FindKeywords, '/findkeywords')

if __name__ == '__main__':
	app.run()

