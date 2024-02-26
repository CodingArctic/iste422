import org.slf4j.*;

public class GenerateOutputs {
    Logger logger;

    public GenerateOutputs () {
        outputInfo();
        outputDebug();
    }

    public void outputInfo () {
        System.out.println("This is some info");

        getLogger().info("This is also some info");
    }

    public Logger getLogger () {
        if (logger == null) {
            logger = LoggerFactory.getLogger(GenerateOutputs.class);
        }

        return logger;
    }

    public void outputDebug () {
        System.out.println("This is a debug");

        getLogger().debug("This is a better debug message or something");
    }
}
