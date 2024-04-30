# Mirror based on jdk17
FROM centos:7

# Define the default location when entering the container and the working location for subsequent operations.
WORKDIR /app

RUN localedef -c -f UTF-8 -i zh_CN zh_CN.UTF-8 && \
    yum -y install wget && \
    wget https://download.oracle.com/java/17/latest/jdk-17_linux-x64_bin.rpm && \
    yum -y install ./jdk-17_linux-x64_bin.rpm && \
    yum -y install bitmap-fonts bitmap-fonts-cjk && \
    yum -y install fontconfig && \
    yum clean all

ENV LANG zh_CN.UTF-8

COPY echarts .

RUN chmod 777 /app/phantomjs/bin/phantomjs

# Copy the jar package in the current directory to the /app directory of the docker container
ADD chat2db-server/chat2db-server-web-start/target/chat2db-server-web-start.jar chat2db-server-web-start.jar
# Copy the lib package in the current directory to the /app/lib directory of the docker container
# ADD chat2db-server/chat2db-server-web-start/target/lib lib
# Let the current container expose 10824
EXPOSE 10824
# Run Jar
ENTRYPOINT ["java","-Dloader.path=lib","-Dspring.profiles.active=release", "-jar","chat2db-server-web-start.jar"]
