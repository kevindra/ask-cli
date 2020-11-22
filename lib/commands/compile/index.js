const { AbstractCommand } = require('@src/commands/abstract-command');
const Messenger = require('@src/view/messenger');
const optionModel = require('@src/commands/option-model');

/**
 * ASK Project compile command.
 * Compiles the project into raw artifacts.
 * Current scope: Alexa Conversations artifacts.
 */
class CompileCommand extends AbstractCommand {
  name() {
    return 'compile';
  }

  description() {
    return 'compile the skill-package (alexa conversations only)';
  }

  requiredOptions() {
    return [];
  }

  optionalOptions() {
    return ['debug'];
  }

  handle(cmd, cb) {
    Messenger.getInstance().info('Compiled Successfully.');
  }
}

module.exports = CompileCommand;
module.exports.createCommand = new CompileCommand(optionModel).createCommand();
