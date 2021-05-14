export default function validate(input) {
    let errors={};

    if(!input.name) {
        errors.name = "Name can't be empty"
    }

    if(!input.duration) {
        errors.duration = "Duration can't be empty"
    }
    
    if(!/^\d+$/.test(input.difficulty)) {
        errors.difficulty = "Difficulty it must be a number"
    }
    
    if(input.countries.length === 0) {
        errors.countries = "Must select at least one countries"
    }

    if(!input.season) {
        errors.season = "Season can't be empty"
    }

    return errors;
}