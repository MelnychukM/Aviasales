import React from "react";
import {Field, reduxForm} from "redux-form";

const filterOfTickets = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field placeholder={''}
                           component={'input'}
                           name={'allStops'}
                           validate={[]}
                           type={'checkbox'}
                    />
                </div>
                <div>
                    <a>Все</a>
                </div>
            </div>

            <div>
                <div>
                    <Field placeholder={''}
                           component={'input'}
                           name={'withoutStops'}
                           validate={[]}
                           type={'checkbox'}
                    />
                </div>
                <div>
                    <a>Без пересадок</a>
                </div>
            </div>

            <div>
                <div>
                    <Field placeholder={''}
                           component={'input'}
                           name={'oneStops'}
                           validate={[]}
                           type={'checkbox'}
                    />
                </div>
                <div>
                    <a>1 пересадка</a>
                </div>
            </div>

            <div>
                <div>
                    <Field placeholder={''}
                           component={'input'}
                           name={'twoStops'}
                           validate={[]}
                           type={'checkbox'}
                    />
                </div>
                <div>
                    <a>2 пересадки</a>
                </div>
            </div>

            <div>
                <div>
                    <Field placeholder={''}
                           component={'input'}
                           name={'threeStops'}
                           validate={[]}
                           type={'checkbox'}
                    />
                </div>
                <div>
                    <a>3 пересадки</a>
                </div>
            </div>

            <div>
                <button>Фильтровать</button>
            </div>
        </form>
    )
}

const FilterOfTicketsReduxForm = reduxForm({
    form: 'filtredTickets'
})
(filterOfTickets)

const FilterBar = (props) => {

    const onSubmitFilterTicketsFormData = (filterTicketsFormData) => {
        return props.returnFilter(filterTicketsFormData)
    }

    return (
        <div>
            <div >
                <div >
                    <div>
                        <div>
                            <a>кол-во пересадок</a>
                        </div>

                        <div>
                            <FilterOfTicketsReduxForm
                                onSubmit={onSubmitFilterTicketsFormData}/>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default FilterBar;