@echo off
D:
cd "D:\cours\mongoDb\bin"
start mongod
ping 127.0.0.1 -n 10 > nul
start mongo

cd "D:\cours\restheart\restheart-4.1.8"
"%JAVA_HOME%\bin\java" -jar -Dfile.Encoding=UTF-8 restheart.jar etc/restheart.yml
exit
