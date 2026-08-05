pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                echo 'Cloning Repository...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy Build') {
            steps {
                bat '''
                if not exist "C:\\ProgramData\\Jenkins\\.jenkins\\userContent\\travel-booking-system" mkdir "C:\\ProgramData\\Jenkins\\.jenkins\\userContent\\travel-booking-system"
                xcopy /E /I /Y build "C:\\ProgramData\\Jenkins\\.jenkins\\userContent\\travel-booking-system\\build"
                '''
            }
        }
    }

    post {
        success {
            echo 'Travel Booking System Build Successful!'
        }

        failure {
            echo 'Build Failed!'
        }
    }
}