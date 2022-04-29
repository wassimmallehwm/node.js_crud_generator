pipeline {
    agent any

    environment {
        CI = false
    }

    stages {
        stage("Initialize Devops") {
            when {
                expression {
                    BRANCH_NAME == 'devops'
                }
            }
            steps {
                echo 'Init Devops branch...'
            }
        }
        stage("Installation") {
            steps {
                echo 'Installing packages...'
                nodejs('Node-14') {
                    sh 'npm install'
                }
            }
        }
        stage("Building") {
            steps {
                echo 'Building application...'
                nodejs('Node-16') {
                    sh 'npm run build'
                }
            }
        }
    }
}