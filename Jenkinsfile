pipeline {
  environment{
    DOCKERHUB_CREDENTIALS=credentials('dockerhub_school_id')
  }
  agent any
  stages {
    stage('debut devops') {
      steps {
        script {
          echo 'hello devops'
        }
      }
    }
    stage('Build docker image'){
        steps{
            script{
                sh 'docker build -t frontend-school .'    
            }
            
        }
    }
    stage('Tag and push docker image'){
      steps{
          script{
            sh "docker tag frontend-school channoufi/school:latest"
            sh "echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin"
            sh "docker push channoufi/school:latest"
          }
      }
      post{
          always{
            sh 'docker logout '
          }

      }
    }
    stage('Docker Run Container'){
      steps{
          script{
            sh "docker run -d --name school_container -p 7070:80 channoufi/school:latest"
          }
      }
    }
  }
}
