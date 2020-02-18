FROM node:erbium

RUN mkdir -p /app
WORKDIR /app

# Install watchman
RUN apt-get update -qq && apt-get install -y \
  libssl-dev \
  autoconf \
  automake \
  libtool \
  python-dev
RUN git clone https://github.com/facebook/watchman.git -b v4.9.0 --depth 1 && \
  cd watchman && \
  ./autogen.sh && \
  ./configure && \
  make && \
  make install

# App port
EXPOSE 9000
# Debugger port
EXPOSE 9229
# Storybook port
EXPOSE 6006
