pipeline {
    agent any
    
    tools { nodejs "node" }
    
    environment {
        FOO = "initial FOO value"
    }

    stages {
        stage('git remote'){
            steps {
                sshagent(["github-key-a-id"]){
                    script {
                        ssh "sh 'git remote set-url origin  git@github.com:aadalid5/nextjs-tests.git'"
                        sh 'git push origin HEAD:main && git push --tags'
                    }
            }
            }
        }
    }
}
