FROM python:3.8.0-alpine
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev


WORKDIR /usr/src/weather_app
COPY requirements.txt /usr/src/weather_app
RUN pip install -r requirements.txt

EXPOSE 8000
CMD ["python", "manage.py", "runserver", "localhost:8000"]
