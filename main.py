from flask import Flask, render_template, make_response, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/frames-check')
def frames_page():
    return render_template('next_page.html')

@app.route('/cookie-page')
def sets_cookie():
    page = make_response(render_template('see_cookie.html'))
    page.set_cookie('test', 'this is a cookie')
    return page

if __name__ == '__main__':
    app.run(port=8080, host='127.0.0.1', debug=True)