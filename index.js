import http from 'http'


export default function server() {
    const routes = []

    return {
        get: (url, callback) => {
            routes.push({ url,callback,method: 'GET' })
        },
        put: (url, callback) => {
            routes.push({ url,callback,method: 'PUT' })
        },
        post: (url, callback) => {
            routes.push({ url,callback,method: 'POST' })
        },
        patch: (url, callback) => {
            routes.push({ url,callback,method: 'PATCH' })
        },
        delete: (url, callback) => {
            routes.push({ url,callback,method: 'DELETE' })
        },
        listen: (port) => {
            const requestListener = function (req, res) {
                for(let route of routes) {
                    if(route.method == 'GET') {
                        if(route.url == req.url) {
                            route.callback(req,res)
                        }
                    }
                }
            }
            
            const server = http.createServer(requestListener);
            server.listen(port);
        }
    }
}
