pipeline {
    environment {
        DOCKERHUB_CREDENTIALS = credentials('DockerCredentialSchool')
    }
    agent any
    stages {
        stage('Recuperation code depuis github') {
            steps {
                echo 'Code pulled successfully'
            }
        }
        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t frontend-school:latest .'  // Ajout du tag latest ici
            }
        }
        stage('Tag and push your image') {
            steps {
                bat 'docker images'  // Débogage: liste toutes les images disponibles
                bat 'docker tag frontend-school:latest channoufi/schoolfrontend:latest'
                bat "docker login -u ${DOCKERHUB_CREDENTIALS_USR} -p ${DOCKERHUB_CREDENTIALS_PSW}"
                bat 'docker push channoufi/schoolfrontend:latest'
            }
            post {
                always {
                    bat 'docker logout'
                }
            }
        }
        stage('Run docker container') {
            steps {
                script {
                     // Remove the existing container if it exists
                    //bat 'docker ps -a -q --filter name=schoolContainer | findstr . && docker rm -f schoolContainer || echo "No existing container to remove"'
                    // Run the new container
                    bat 'docker run -d --name schoolContainer -p 8088:80 frontend-school:latest'
                }
            }
        }
    }
}