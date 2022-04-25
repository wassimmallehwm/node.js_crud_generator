pipeline {
    agent any
    stages {
        stage("Installation") {
            steps {
                echo 'Installing packages...'
                nodejs('Node-16') {
                    sh 'npm install'
                }
            }
        }
        stage("Building") {
            steps {
                echo 'Building application...'
                nodejs('Node-16') {
                    sh 'npm build'
                }
            }
        }
    }
}