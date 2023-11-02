import logging


# logging.basicConfig(filename='Logs/logfile.log', format='%(asctime)s %(name)-12s %(levelname)-8s %(message)s',
#                     level=logging.INFO)
# log = logging.getLogger()
# log.info("this is the first log")


def log():
    logging.basicConfig(filename='Logs/logfile.log', format='%(asctime)s %(name)-12s %(levelname)-8s %(message)s',
                        level=logging.INFO)
    logger = logging.getLogger()
    return logger


logger = log()
logger.info("This is our new log")
logger.error("this is an error message")
