# Use official lightweight Nginx image
FROM nginx:alpine

# Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy all your project files to Nginx directory
COPY . /usr/share/nginx/html

# Expose port 80 to access the app
EXPOSE 80

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
