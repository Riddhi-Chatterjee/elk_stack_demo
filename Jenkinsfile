pipeline {
    agent any

    tools {
        nodejs "nodejs"
    }

    environment {
            CI = 'true'
            registry = 'riddhich/calculator'
            DOCKERHUB_CRED = credentials('CRED_DOCKER')
            registryCredential = 'CRED_DOCKER'
            dockerimage = ''
    }

    stages {
        stage('git pull') {
            steps {
                git url: 'https://github.com/Riddhi-Chatterjee/calculator.git', branch: 'main'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install --force' //Installing dependencies
                sh 'tar czf Calculator.tar.gz node_modules public scripts src Jenkinsfile package.json' //Creating a compressed archive of the required files and directories
            }
        }
        stage('Test') {
            steps {
                sh 'chmod 777 ./scripts/test.sh' //Ensuring that test.sh is executable
                sh './scripts/test.sh' //Executing test.sh
            }
        }
        stage('Build docker image') {
            steps {
                script{
                    sh 'chmod 777 ./scripts/config.sh' //Ensuring that config.sh is executable
                    sh './scripts/config.sh' //Executing config.sh
                    dockerimage = sh '/usr/local/bin/docker build -t'+registry+':latest .'
                }
            }
        }
        stage('Push image to DockerHub') {
            steps {
                script{
                    sh '/usr/local/bin/docker login -u "riddhich" -p "rocker@43893"'
                    sh '/usr/local/bin/docker push ' +registry +':latest'
                } 
            }
        }
        stage('Free local space') {
            steps {
                sh '/usr/local/bin/docker rmi $registry:latest'
            }
        }
        stage('Deploy') {
            steps {
                sh 'export PATH="/Users/riddhichatterjee/Library/Python/3.9/bin:$PATH"'
                sh '/Users/riddhichatterjee/Library/Python/3.9/bin/ansible-playbook ./Deployment/deploy.yml -i ./Deployment/inventory -e image_name=riddhich/calculator'
                sh 'chmod 777 ./scripts/kill.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './scripts/kill.sh'
            }
        }
    }
}
