FROM node
WORKDIR  /myapp
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm","start"]

#1. docker build image > 
# docker build -t desidevops/calculatorapp:v1 .

#2. docker image push to docker hub > 
# docker push desidevops/calculatorapp:v1

#3. create kubernetes deployment > 
# kubectl create deployment myapp --image=desidevops/calculatorapp:v1
