'use strict';
goog.provide ( 'Blockly.Msg.fr');
goog.require ( 'Blockly.Msg');

Blockly.Msg.INOUT_HIGH_LEVEL = "1(high state)";
Blockly.Msg.INOUT_LOW_LEVEL = "0(low state)";
Blockly.Msg.ARD_TYPE_CHAR = "character";
Blockly.Msg.ARD_TYPE_TEXT = "text";
Blockly.Msg.ARD_TYPE_BOOL = "binary";
Blockly.Msg.ARD_TYPE_SHORT = "byte";
Blockly.Msg.ARD_TYPE_NUMBER = "integer";
Blockly.Msg.ARD_TYPE_UNUMBER = "unsigned integer";
Blockly.Msg.ARD_TYPE_LONG = "long integer";
Blockly.Msg.ARD_TYPE_DECIMAL = "floating point number";
Blockly.Msg.ARD_TYPE_ARRAY = "array";
Blockly.Msg.ARD_TYPE_NULL = "empty";
Blockly.Msg.ARD_TYPE_UNDEF = "not defined";
Blockly.Msg.ARD_TYPE_VOLATILE = "volatile integer";
Blockly.Msg.ARD_TYPE_CHILDBLOCKMISSING = "typing missing on a block";
Blockly.Msg.ARDUINO_BETWEEN = "произволно число между";
Blockly.Msg.ARDUINO_BETWEEN_AND = "и";
Blockly.Msg.ARDUINO_VAR_DECLARE="states";
Blockly.Msg.ARDUINO_VAR_AS = "as";
Blockly.Msg.ARDUINO_VAR_VAL = "of value";
Blockly.Msg.base_def_const = "set";
Blockly.Msg.base_define_const = "which is equivalent to";
Blockly.Msg.base_define_const_tooltip = "allows the programmer to give a name to any value";
Blockly.Msg.type = "set a value as the selected type";
Blockly.Msg.ADD_COMMENT = "💬Добави коментар";
Blockly.Msg.CHANGE_VALUE_TITLE = "Промени стойността:";
Blockly.Msg.CLEAN_UP = "🛁Премахни блокове";
Blockly.Msg.COLLAPSE_ALL = "🗜Скрий блокове";
Blockly.Msg.COLLAPSE_BLOCK = "🗜Скрий блок";
Blockly.Msg.CONTROLS_SWITCH_VAR_TITLE = "Ако";
Blockly.Msg.CONTROLS_SWITCH_MSG_DEFAULT = "по подразбиране";
Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK = "е";
Blockly.Msg.CONTROLS_SWITCH_MSG_SWITCHVAR = "Ако променливата е валидна";
Blockly.Msg.CONTROLS_SWITCH_MSG_DO = "направи";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_1 = "If a value is true then execute the following commands";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_2 = "If a value is true then execute the first block of commands, otherwise execute the next block of commands";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_3 = "If a value is true then execute the first block of commands, otherwise execute the next block of commands if the condition is true";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_4 = "If a value is true then execute the first block of commands, else execute the next block of commands if the condition is true.If no condition is satisfied, then make the default command block.";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "прекъсни цикъла";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = "премини към следващата стъпка от цикъла";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = "Прекъсни цикъла, в който се съдържа тази команда.";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = "Премини към следващата стъпка от цикъла";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING = "Предупреждение: Този блок може да се използва само в цикъл.";
Blockly.Msg.CONTROLS_FOREACH_TITLE = "за всеки елемент %1 в списъка %2";
Blockly.Msg.CONTROLS_FOREACH_TOOLTIP = "За всеки елемент в даден списък, присвои елемента на променливата „%1“ и след това изпълни командите.";
Blockly.Msg.CONTROLS_FOR_TITLE = "преброй чрез %1 от %2 до %3 (<=) през %4";
Blockly.Msg.CONTROLS_FOR_TITLE2 = "преброй чрез %1 от %2 до %3 (>=) през - %4";
Blockly.Msg.CONTROLS_FOR_TOOLTIP = "Нека променлива '%1' премине през стойностите от началното до крайното число през зададената стъпка и изпълни избраните блокове.";
Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP = "Добави условие към „ако“ блока.";
Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP = "Добави окончателно, прихващащо всички останали случаи условие към блок „ако“.";
Blockly.Msg.CONTROLS_IF_IF_TOOLTIP = "Добави, премахни или пренареди частите, за да промениш този „ако“ блок.";
Blockly.Msg.CONTROLS_IF_MSG_ELSE = "иначе";
Blockly.Msg.CONTROLS_IF_MSG_ELSEIF = "иначе ако";
Blockly.Msg.CONTROLS_IF_MSG_IF = "ако";
Blockly.Msg.CONTROLS_IF_TOOLTIP_1 = "Ако стойността е вярна, изпълни операциите.";
Blockly.Msg.CONTROLS_IF_TOOLTIP_2 = "Ако стойността е вярна, изпълни първият блок. Иначе, изпълни вторият блок.";
Blockly.Msg.CONTROLS_IF_TOOLTIP_3 = "Ако първата стойност е вярна, изпълни първия блок. Иначе, ако втората стойност е вярна, изпълни втория блок.";
Blockly.Msg.CONTROLS_IF_TOOLTIP_4 = "Ако първата стойност е вярна, изпълни първия блок. В противен случай, ако втората стойност е вярна, изпълни втория блок. Ако нито една от стойностите не е вярна, изпълни последния блок.";
Blockly.Msg.CONTROLS_REPEAT_INPUT_DO = "изпълни";
Blockly.Msg.CONTROLS_REPEAT_TITLE = "🔁 Повтори %1 пъти";
Blockly.Msg.CONTROLS_REPEAT_TOOLTIP = "Изпълнява команди няколко пъти.";
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "повтаряй докато";
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "повтаряй докато е вярно, че";
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = "Изпълни командите, ако стойността не е вярна.";
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = "Изпълни командите, ако стойността е вярна.";
Blockly.Msg.DELETE_ALL_BLOCKS = "🗑️Премахни тези %1 блокове?";
Blockly.Msg.DELETE_BLOCK = "🗑️Премахни блок";
Blockly.Msg.DELETE_VARIABLE = "🗑️Премахни променлива %1";
Blockly.Msg.DELETE_VARIABLE_CONFIRMATION = "Премахни %1 използва променлива %2?";
Blockly.Msg.DELETE_X_BLOCKS = "🗑️Премахни %1 блока";
Blockly.Msg.DISABLE_BLOCK = "🔒Деактивирай блок";
Blockly.Msg.DUPLICATE_BLOCK = "📑Дублиране";
Blockly.Msg.ENABLE_BLOCK = "🔑Активирай блок";
Blockly.Msg.EXPAND_ALL = "📖Покажи блокове";
Blockly.Msg.EXPAND_BLOCK = "📖Покажи блок";
Blockly.Msg.EXTERNAL_INPUTS = "↘️Външни входове";
Blockly.Msg.HELP = "ℹ️ Помощ?";
Blockly.Msg.INLINE_INPUTS = "➡️Вътрешни входове";
Blockly.Msg.LISTS_CREATE1 = "създай списък";
Blockly.Msg.LISTS_CREATE2 = "с";
Blockly.Msg.LISTS_CREATE_TOOLTIP = "Създай списък със зададен брой елементи.";
Blockly.Msg.LISTS_append = 'добави %1 в края на %2';
Blockly.Msg.LISTS_append_TOOLTIP = 'добави елемент в края на списък';
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "списък";
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = "Добави, премахни или пренареди частите, за да промениш този списъчен блок.";
Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH = "създай списък с";
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP = "Добави елемент";
Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP = "Създай списък с произволен брой елементи.";
Blockly.Msg.LISTS_GET = "елемента";
Blockly.Msg.LISTS_GET_INDEX_FROM_END = "# от края";
Blockly.Msg.LISTS_GET_INDEX_FROM_START = "#"; // untranslated
Blockly.Msg.LISTS_GET_INDEX_GET = "Вземи";
Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE = "вземи и премахни";
Blockly.Msg.LISTS_GET_INDEX_LAST = "последния";
Blockly.Msg.LISTS_GET_INDEX_RANDOM = "произволен";
Blockly.Msg.LISTS_GET_INDEX_REMOVE = "премахни";
Blockly.Msg.LISTS_GET_INDEX_TAIL = ""; // untranslated
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = "Връща първия елемент в списък.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM = "Връща елемента на определената позиция в списък.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST = "Връща последния елемент в списък.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = "Връща случаен елемент от списъка.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = "Премахва и връща първия елемент в списък.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM = "Премахва и връща елемента на определена позиция в списък.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = "Премахва и връща последния елемент в списък.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = "Премахва и връща случаен елемент от списък.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = "Премахва първия елемент от списък.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM = "Премахва елемент на определена позиция от списък.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = "Премахва последния елемент от списък.";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = "Премахва случаен елемент от списък.";
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END = "до # открая";
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START = "до #";
Blockly.Msg.LISTS_GET_SUBLIST_END_LAST = "до края";
Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST = "вземи подсписък от първия";
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END = "вземи подсписък от # от края";
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START = "вземи подсписък от #";
Blockly.Msg.LISTS_GET_SUBLIST_TAIL = ""; // untranslated
Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP = "Копира част от списък.";
Blockly.Msg.LISTS_INDEX_FROM_END_TOOLTIP = "%1 е последният елемент.";
Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP = "%1 е първият елемент.";
Blockly.Msg.LISTS_INDEX_OF_FIRST = "намери първата поява на елемента";
Blockly.Msg.LISTS_INDEX_OF_LAST = "намери последната поява на елемента";
Blockly.Msg.LISTS_INDEX_OF_TOOLTIP = "Връща индекса на първото/последното появяване на елемента в списъка. Връща %1, ако елементът не е намерен.";
Blockly.Msg.LISTS_INLIST = "в списъка";
Blockly.Msg.LISTS_ISEMPTY_TITLE = "%1 е празен";
Blockly.Msg.LISTS_ISEMPTY_TOOLTIP = "Връща стойност вярно, ако списъкът е празен.";
Blockly.Msg.LISTS_LENGTH_TITLE = "дължината на %1";
Blockly.Msg.LISTS_LENGTH_TOOLTIP = "Връща дължината на списък.";
Blockly.Msg.LISTS_REPEAT_TITLE = "създай списък от %1 повторен %2 пъти";
Blockly.Msg.LISTS_REPEAT_TOOLTIP = "Създава списък, състоящ се от определен брой копия на елемента.";
Blockly.Msg.LISTS_SET_INDEX_INPUT_TO = "следното";
Blockly.Msg.LISTS_of = "от";
Blockly.Msg.LISTS_SET_INDEX_SET = "промени";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = "Вмъква елемент в началото на списъка.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM = "Вмъква елемент на определена позиция в списък.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = "Добави елемент в края на списък.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = "Вмъква елемент на произволно място в списък.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = "Променя първия елемент в списък.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM = "Променя елемента на определена позиция в списък.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST = "Променя последния елемент в списък.";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = "Променя случаен елемент от списък.";
Blockly.Msg.LOGIC_BOOLEAN_FALSE = "невярно";
Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP = "Връща вярно или невярно.";
Blockly.Msg.LOGIC_BOOLEAN_TRUE = "вярно";
Blockly.Msg.compare = "Върни вярно ако параметъра е в интервала";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ = "Върни вярно, ако двата параметъра са еднакви.";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT = "Върни истина, ако първия параметър е по-голям от втория.";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE = "Върни истина, ако първия параметър е по-голям или равен на втория.";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT = "Върни вярно, ако първият параметър е по-малък от втория.";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE = "Върни истина, ако първия параметър е по-малък или равен на втория.";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ = "Върни вярно, ако двата параметъра са различни.";
Blockly.Msg.LOGIC_NEGATE_TITLE = "не %1";
Blockly.Msg.LOGIC_NEGATE_TOOLTIP = "Върни вярно, ако параметърът е неверен. Върни невярно, ако параметърът е верен.";
Blockly.Msg.LOGIC_NULL = "null";
Blockly.Msg.LOGIC_NULL_TOOLTIP = "връща null";
Blockly.Msg.LOGIC_OPERATOR = [["и", "and"], ["или", "or"], ["Изключващо или ", "xor"], ["измести наляво", "shiftL"], ["измести надясно", "shiftR"]];
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND = "Върни вярно, ако и двата параметъра са верни.";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR = "Върни „вярно“, ако поне един от входовете е верен.";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_xor = "Върни „вярно“, ако само един от входовете е верен.";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_shiftR = "измести надясно \ n";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_shiftL = "измести наляво";
Blockly.Msg.LOGIC_TERNARY_CONDITION = "тест";
Blockly.Msg.LOGIC_TERNARY_IF_FALSE = "Ако е невярно";
Blockly.Msg.LOGIC_TERNARY_IF_TRUE = "Ако е вярно";
Blockly.Msg.LOGIC_TERNARY_TOOLTIP = "Провери условието в „тест“. Ако условието е истина, върни стойността „ако е вярно“, иначе върни стойността „ако е невярно“.";
Blockly.Msg.MATH_ADDITION_SYMBOL = "+"; // untranslated
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD = "Върни сумата на двете числа. ";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE = "Върни частното на двете числа.";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS = "Върни разликата на двете числа.";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = "Върни произведението на двете числа.";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER = "Върни първото число, повдигнато на степен на второто число.";
Blockly.Msg.MATH_CHANGE_TITLE = "промени %1 на %2";
Blockly.Msg.MATH_CHANGE_TOOLTIP = "Добави число към променлива %1";
Blockly.Msg.MATH_CONSTANT_TOOLTIP = "Връща една от често срещаните константи: π (3.141 ...), e (2.718 ...), φ (1.618 ...), sqrt (2) (1.414 ...), sqrt (½) (0.707 ...), or ∞ (infinite) ";
Blockly.Msg.MATH_CONSTRAIN_TITLE = "ограничи # %1 между %2 & %3";
Blockly.Msg.MATH_CONSTRAIN_TOOLTIP = "Ограничи число да бъде в определените граници (включително).";
Blockly.Msg.MATH_DIVISION_SYMBOL = "÷"; // untranslated
Blockly.Msg.MATH_IS_DIVISIBLE_BY = "се дели на";
Blockly.Msg.MATH_IS_EVEN = "е четно";
Blockly.Msg.MATH_IS_NEGATIVE = "е отрицателно";
Blockly.Msg.MATH_IS_ODD = "е нечетно";
Blockly.Msg.MATH_IS_POSITIVE = "е положително";
Blockly.Msg.MATH_IS_PRIME = "е просто";
Blockly.Msg.MATH_IS_TOOLTIP = "Проверете дали дадено число е четно, нечетно, просто, цяло, положително, отрицателно или дали се дели на друго число. Връща вярно или невярно.";
Blockly.Msg.MATH_IS_WHOLE = "е цяло";
Blockly.Msg.MATH_MODULO_TITLE = "остатъка от делението на %1 на ÷%2";
Blockly.Msg.MATH_MODULO_TOOLTIP = "Върни остатъка от деление на две числа.";
Blockly.Msg.MATH_MULTIPLICATION_SYMBOL = "×"; // untranslated
Blockly.Msg.MATH_NUMBER_TOOLTIP = "Число.";
Blockly.Msg.MATH_ONLIST_HELPURL = ""; // untranslated
Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE = "средната стойност на числата в списъка";
Blockly.Msg.MATH_ONLIST_OPERATOR_MAX = "най-голямата стойност в списъка";
Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN = "медианата на списък";
Blockly.Msg.MATH_ONLIST_OPERATOR_MIN = "най-малката стойност в списъка";
Blockly.Msg.MATH_ONLIST_OPERATOR_MODE = "режими на списъка";
Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM = "случаен елемент от списъка";
Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV = "стандартно отклонение на списък";
Blockly.Msg.MATH_ONLIST_OPERATOR_SUM = "сума на списъка";
Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE = "Върни средната стойност (аритметичното средно) на числата в списъка.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX = "Върни най-голямото число в списъка.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN = "Върни медианата в списъка.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN = "Върни най-малкото число в списъка.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE = "Върни списък на най-често срещаните елементи в списъка.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM = "Върни случаен елемент от списъка.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV = "Връща стандартното отклонение на списъка.";
Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM = "Върни сумата на всички числа в списъка.";
Blockly.Msg.MATH_POWER_SYMBOL = "^"; // untranslated
Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM = "случайно дробно число";
Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP = "Върни случайно дробно число между 0.0 (включително) и 1.0 (без да го включва)";
Blockly.Msg.MATH_RANDOM_INT_TITLE = "случайно цяло число между %1 и %2";
Blockly.Msg.MATH_RANDOM_INT_TOOLTIP = "Върни случайно число в определените граници (включително).";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUND = "закръгли";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN = "закръгли надолу";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP = "закръгли нагоре";
Blockly.Msg.MATH_ROUND_TOOLTIP = "Закръгли число нагоре или надолу.";
Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE = "абсолютна";
Blockly.Msg.MATH_SINGLE_OP_ROOT = "корен квадратен";
Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS = "Връща абсолютната стойност на число.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP = "Върни е (неперовото число) на степен зададеното число.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_LN = "Върни натуралния логаритъм от число.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10 = "Върни десетичния логаритъм на число.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG = "Върни числото с обърнат знак.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_POW10 = "Върни 10 на степен зададеното число.";
Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT = "Връща корен квадратен от число.";
Blockly.Msg.MATH_SUBTRACTION_SYMBOL = "-"; // untranslated
Blockly.Msg.MATH_TRIG_ACOS = "acos"; // untranslated
Blockly.Msg.MATH_TRIG_ASIN = "asin"; // untranslated
Blockly.Msg.MATH_TRIG_ATAN = "atan"; // untranslated
Blockly.Msg.MATH_TRIG_COS = "cos"; // untranslated
Blockly.Msg.MATH_TRIG_SIN = "sin"; // untranslated
Blockly.Msg.MATH_TRIG_TAN = "tan"; // untranslated
Blockly.Msg.MATH_TRIG_TOOLTIP_ACOS = "Върни аркускосинус от число.";
Blockly.Msg.MATH_TRIG_TOOLTIP_ASIN = "Върни аркуссинус от число.";
Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN = "Върни аркустангенс от число.";
Blockly.Msg.MATH_TRIG_TOOLTIP_COS = "Върни косинус от ъгъл в градуси (не в радиани)";
Blockly.Msg.MATH_TRIG_TOOLTIP_SIN = "Върни синус от ъгъл в градуси (не в радиани)";
Blockly.Msg.MATH_TRIG_TOOLTIP_TAN = "Върни тангенс от ъгъл в градуси (не в радиани)";
Blockly.Msg.NEW_VARIABLE = "Създаване на променлива...";
Blockly.Msg.NEW_VARIABLE_TITLE = "Ново име на променливата:";
Blockly.Msg.ORDINAL_NUMBER_SUFFIX = ""; // untranslated
Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP = "Изпълни дефинирана от потребителя функция „%1“.";
Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP = "Изпълни дефинирана от потребителя функция „%1“ и използвай резултата.";
Blockly.Msg.PROCEDURES_CREATE_DO = "Създай '%1'";
Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT = "Опишете тази функция...";
Blockly.Msg.PROCEDURES_DEFNORETURN_DO = "";
Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE = "направиш";
Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE = "за да";
Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP = "Създава функция, която не връща резултат.";
Blockly.Msg.PROCEDURES_DEFRETURN_RETURN = "върни";
Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP = "Създава функция, която връща резултат.";
Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING = "Предупреждение: Тази функция има дублиращи се параметри.";
Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF = "Покажи дефиницията на функцията";
Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP = "Ако стойността е вярна, върни втората стойност.";
Blockly.Msg.PROCEDURES_IFRETURN_WARNING = "Предупреждение: Този блок може да се използва само във функция.";
Blockly.Msg.PROCEDURES_MUTATORARG_TYPE = "от тип";
Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP = "Добавяне на параметър към функцията.";
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE = "вход";
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP = "Добави, премахни или пренареди входните параметри за тази функция.";
Blockly.Msg.REDO = "Повторение";
Blockly.Msg.REMOVE_COMMENT = "🗑️Премахни коментар";
Blockly.Msg.RENAME_VARIABLE = "✏️Преименувай променливата '%1'";
Blockly.Msg.RENAME_VARIABLE_TITLE = "✏️Преименувай всички '%1' променливи на:";
//Array
Blockly.Msg.ARRAY_CREATE_EMPTY_TITLE = 'празен!';
Blockly.Msg.tab_create = "Създай 'елемент от масив %1'";
Blockly.Msg.tab_create_fix = "Create Block 'put an element from array %1 to '";
Blockly.Msg.ARRAY_CREATE_WITH = "made up of";
Blockly.Msg.ARRAY_taille = "размер";
Blockly.Msg.ARRAY_contenu = "който съдържа";
Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TITLE_ADD = "списък или масив";
Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TOOLTIP = "Добави, премахни или пренареди частите, за да промениш този масив.";
Blockly.Msg.ARRAY_CREATE_WITH_INPUT_WITH = "елементи";
Blockly.Msg.ARRAY_CREATE_WITH_ITEM_TITLE = "елемент";
Blockly.Msg.ARRAY_CREATE_WITH_TOOLTIP = "Returns a list with a number of items";
Blockly.Msg.ARRAY_GETINDEX_ITEM = "елемент от масива";
Blockly.Msg.ARRAY_GETINDEX_ITEM2 = "масив";
Blockly.Msg.ARRAY_GETINDEX_TOOLTIP1 = "returns the value stored in the list";
Blockly.Msg.ARRAY_GETINDEX_TOOLTIP2 = "created an array of the selected type";
Blockly.Msg.ARRAY_GETINDEX_TOOLTIP3 = "fix an element of the list or array to the indicated value";
Blockly.Msg.ARRAY_create = "създай масив";
Blockly.Msg.ARRAY_fixe = "сложи елемент в масива";
Blockly.Msg.ARRAY_dim = "с дължина";
Blockly.Msg.ARRAY_index = "индекс";
Blockly.Msg.ARRAY_append_tooltip = "добави елемент в края на списък или масив";
Blockly.Msg.ARRAY_append_url = "";
Blockly.Msg.size = "размер на масива";
Blockly.Msg.size_TOOLTIP = "върни размера на списък или масив";
//text
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP = "Добави елемент към текста.";
Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN = "свържи";
Blockly.Msg.TEXT_CREATE_JOIN_TOOLTIP = "Добави, премахни или пренареди частите, за да промениш този текстов блок.";
Blockly.Msg.TEXT_ISEMPTY_TITLE = "%1 е празен";
Blockly.Msg.TEXT_ISEMPTY_TOOLTIP = "Връща вярно, ако текста е празен.";
Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH = "създай текст с";
Blockly.Msg.TEXT_JOIN_TOOLTIP = "Създай текст като съчетаеш няколко елемента.";
Blockly.Msg.TEXT_LENGTH_TITLE = "дължината на %1";
Blockly.Msg.TEXT_LENGTH_TOOLTIP = "Връща броя на символите (включително и интервалите) в текста.";
Blockly.Msg.TEXT_PRINT_TITLE = "отпечатай %1";
Blockly.Msg.TEXT_PRINT_TOOLTIP = "Отпечатай текста, числото или друга стойност.";
Blockly.Msg.TEXT_TEXT_TOOLTIP = "Буква, дума или ред";
Blockly.Msg.TODAY = "Днес";
Blockly.Msg.UNDO = "Отмяна";
Blockly.Msg.VARIABLES_AS = "тип";
Blockly.Msg.VARIABLES_DEFAULT_NAME = "елемент";
Blockly.Msg.VARIABLES_GET_CREATE_SET = "Създай „промени стойността на %1“";
Blockly.Msg.VARIABLES_GET_TOOLTIP = "Връща стойността на тази променлива.";
Blockly.Msg.VARIABLES_SET = "нека %1 бъде %2";
Blockly.Msg.VARIABLES_SET_CREATE_GET = "Създай „вземи стойността на %1“";
Blockly.Msg.VARIABLES_SET_TOOLTIP = "Установява променливата със стойността на входа.";
Blockly.Msg.var_set_init = "set variable";
Blockly.Msg.var_set_init_tooltip = "Declare and initialize the variable of the specified type and value";
Blockly.Msg.ARDUINO_VAR_CONST = "set constant";
Blockly.Msg.ARDUINO_VAR_CONST_tooltip = "Declares a constant of the specified type and value";
Blockly.Msg.VARIABLE_ALREADY_EXISTS = "Променлива с име '%1' вече съществува.";
Blockly.Msg.PROCEDURES_DEFRETURN_TITLE = "";
Blockly.Msg.CONTROLS_IF_IF_TITLE_IF = Blockly.Msg.CONTROLS_IF_MSG_IF;
Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.CONTROLS_IF_MSG_THEN = "тогава";
Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE = Blockly.Msg.CONTROLS_IF_MSG_ELSE;
Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE = Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE;
Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.MATH_CHANGE_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.PROCEDURES_DEFRETURN_DO = Blockly.Msg.PROCEDURES_DEFNORETURN_DO;
Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = Blockly.Msg.CONTROLS_IF_MSG_ELSEIF;
Blockly.Msg.LISTS_GET_INDEX_HELPURL = Blockly.Msg.LISTS_INDEX_OF_HELPURL;
Blockly.Msg.CONTROLS_FOREACH_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.CONTROLS_FOR_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.TEXT_APPEND_VARIABLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT = Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT;