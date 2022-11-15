pipeline {
    agent any
    
    tools { nodejs "node" }
    
    environment {
        FOO = "initial FOO value"
    }

    stages {
        stage('git remote'){
            sshagent(["github-key-a-id"]){
                script {
                    sh 'git remote set-url origin  https://github.com/aadalid5/nextjs-tests.git'
                    sh 'git push origin HEAD:main && git push --tags'
                }
            }
        }
    }
}
