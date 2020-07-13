# What is backend?

Data needs to be stored and retrieved, business logic and rules need to be followed, and results need to be calculated.

All of this happens behind the scenes. 

Overall backend developer works with the following

* Web Development Languages => Python, Ruby, Java etc
* Database and cache => MySQL, MongoDB, Oracle
* Server => A web server is server software, or hardware dedicated to running this software, that can   satisfy client requests on the World Wide Web. A web server can, in general, contain one or more websites. A web server processes incoming network requests over HTTP and several other related protocols. The primary function of a web server is to store, process and deliver web pages to clients.This definition is for the big servers, for example if we would run our backend in our computer, computer is server. So the word server has loose definition.
* API (REST & SOAP):
    * REST => We will use this one, because it is faster and more convenient. It provides a lot of different representations (we will use json). REST is the architecture style which uses CRUD functions. 
    * SOAP => format to exchange with messages. The messages are always in XML. SOAP uses WSDL(Web Services Description Language). It's used for describing the functionality of a SOAP based web service. WSDL files are central to testing SOAP-based services. SoapUI uses WSDL files to generate test requests, assertions and mock services.
    *  RESTful: JSON через HTTP 
       SOAP: XML поверх SOAP через HTTP
* Client-server architecture => architecture of a computer network in which many clients 
        (remoteprocessors) request and receive service from a centralized server (host computer). 
        Client computers provide an interface to allow a computer user to request services of the server and to display the results the server returns.



# HTTP/1.1

    check documentation https://www.w3.org/Protocols/HTTP/1.1/rfc2616bis/draft-lafon-rfc2616bis-03.html

    Когда вы вводите что-то на сайте, который работает по HTTPS, перед отправкой данных на сервер браузер зашифровывает информацию. Чтобы расшифровать и прочитать её, нужен специальный ключ, который хранится только на сервере. Такое шифрование называется криптографическим. Если даже мошенник перехватит информацию, он не сможет её прочитать. На то чтобы подобрать ключ к шифру, уйдут годы непрерывного перебора.




