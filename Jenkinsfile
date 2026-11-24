
pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm.cmd install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm.cmd test'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t coderwanda-webapp .'
            }
        }

        stage('Deploy Docker Container') {
            steps {
                bat 'docker rm -f coderwanda-container || exit /b 0'
                bat 'docker run -d --name coderwanda-container -p 3000:3000 coderwanda-webapp'
            }
        }
    }
}
