import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';

const ConvoxPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#E0F9FF',
            100: '#C6F3FF',
            200: '#9AEDFF',
            300: '#6EE8FF',
            400: '#23DEFF',
            500: '#11BADF',
            600: '#0D91AD',
            700: '#0A6B7F',
            800: '#084456',
            900: '#11495A',
            950: '#061F28'
        },
        success: {
            50: '#EAFFF4',
            100: '#D4FFE9',
            200: '#B7FFD7',
            300: '#97F9BF',
            400: '#7FFF9C',
            500: '#52DC72',
            600: '#46A95D',
            700: '#327F46',
            800: '#245C33',
            900: '#163F1F',
            950: '#0E2513'
        },
        danger: {
            50: '#FFECEA',
            100: '#FFD0CC',
            200: '#FFAFA6',
            300: '#FF7A66',
            400: '#FF4A33',
            500: '#FE1900',
            600: '#C11300',
            700: '#900F00',
            800: '#5A0A00',
            900: '#2E0500',
            950: '#170300'
        },
        warning: {
            50: '#FFF8E6',
            100: '#FFECB3',
            200: '#FFE080',
            300: '#FFD24D',
            400: '#FFC233',
            500: '#FFA800',
            600: '#CC8600',
            700: '#996300',
            800: '#664200',
            900: '#332100',
            950: '#1A1100'
        },


    },
    components: {
        button: {
            colorScheme: {
                light: {
                    root: {
                        primary: {
                            background: '#11495A',
                            color: '#9AEDFF',
                            hoverBackground: '#9AEDFF',
                            hoverColor: '#11495A',
                            activeBackground: '#9AEDFF',
                            activeColor: '#11495A',
                            borderColor: 'transparent',
                            hoverBorderColor: 'transparent',
                            activeBorderColor: 'transparent',
                        },
                        success: {
                            background: '#0E2513',
                            color: '#B7FFD7',
                            hoverBackground: '#B7FFD7',
                            hoverColor: '#0E2513',
                            activeBackground: '#B7FFD7',
                            activeColor: '#0E2513',
                            borderColor: 'transparent',
                            hoverBorderColor: 'transparent',
                            activeBorderColor: 'transparent',
                        },
                        danger: {
                            background: '#FE1900',
                            color: '#FFFFFF',
                            hoverBackground: '#FE1900',
                            activeBackground: '#FE1900',
                            borderColor: 'transparent',
                            hoverBorderColor: 'transparent',
                            activeBorderColor: 'transparent',
                        },
                        warn: {
                            background: '#A86F02',
                            color: '#FFD95A',
                            hoverBackground: '#FFD95A',
                            hoverColor: '#A86F02',
                            activeBackground: '#FFD95A',
                            activeColor: '#A86F02',
                            borderColor: 'transparent',
                            hoverBorderColor: 'transparent',
                            activeBorderColor: 'transparent',
                        },
                        info: {
                            background: '#23DEFF',
                            color: '#11495A',
                            hoverBackground: '#11495A',
                            hoverColor: '#23DEFF',
                            activeBackground: '#11495A',
                            activeColor: '#23DEFF',
                            borderColor: 'transparent',
                            hoverBorderColor: 'transparent',
                            activeBorderColor: 'transparent',
                        },
                        contrast: {
                            background: '#0B141A',
                            color: '#FFFFFF',
                            hoverBackground: '#0B141A',
                            hoverColor: '#FFFFFF',
                            activeBackground: '#0B141A',
                            activeColor: '#FFFFFF',
                            borderColor: 'transparent',
                            hoverBorderColor: 'transparent',
                            activeBorderColor: 'transparent',
                        },
                    }
                }
            }
        },
        radiobutton: {
            colorScheme: {
                light: {
                    root : {
                        checkedBorderColor: '#163F1F',
                        checkedBackground: '#163F1F',
                        checkedHoverBackground: '#163F1F',
                        checkedHoverBorderColor: '#163F1F'
                    }
                }
            }
        },
        checkbox: {
            colorScheme: {
                light: {
                    root : {
                        checkedBackground: '#163F1F',
                        checkedHoverBackground: '#163F1F',
                        checkedHoverBorderColor: '#B7FFD7',
                        checkedBorderColor: '#B7FFD7',
                    }
                }
            }
        },
        inputtext: {
            colorScheme: {
                light: {
                    root: {
                        borderColor: '#0B141A',
                        focusBorderColor: '#0B141A'
                    }
                }
            }
        },
        floatlabel: {
            colorScheme: {
                light: {
                    root: {
                        color: '#0B141A',
                        activeColor: '#0B141A',
                        active: '#0B141A',
                        focusColor: '#0B141A'
                    }
                }
            }
        },
        toggleswitch: {
            colorScheme: {
                light: {
                    root: {
                        borderColor: '#163F1F',
                        checkedBorderColor: '#163F1F',
                        checkedHoverBackground: '#163F1F',
                        checkedHoverBorderColor: '#163F1F',
                        checkedBackground: '#163F1F'
                    }
                }
            }
        },
    }
});

export { ConvoxPreset }