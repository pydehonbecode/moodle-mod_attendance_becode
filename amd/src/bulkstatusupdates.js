define([], function() {
    return {
        init: function() {
            const updateRow = document.querySelector('.bulkeditrow');
            const sessionStatuses = updateRow.querySelectorAll('[id*="radiocheckstatus"]');
            const remarkUpdateField = updateRow.querySelector('#update_remarks');

            const setStatusToCheckedRows = (classname) => {
                const checkedBoxes = document.querySelectorAll('input#cb_selector:checked');

                checkedBoxes.forEach(checkboxElement => {
                    const parentRow = checkboxElement.parentElement.parentElement;
                    const status = parentRow.querySelector('.' + classname);
                    
                    if (status) {
                        status.checked = true;
                    } else {
                        console.error("status element not found for", parentRow);
                    }
                })
            }

            const setRemarksToCheckedRows = (content) => {
                const checkedBoxes = document.querySelectorAll('input#cb_selector:checked');
            
                checkedBoxes.forEach(checkboxElement => {
                    const parentRow = checkboxElement.parentElement.parentElement;
                    const remarksElement = parentRow.querySelector('[name*="remarks"]');
            
                    if (remarksElement) {
                        remarksElement.value = content;
                    } else {
                        console.error("Remarks element not found in", parentRow);
                    }
                });
            };

            sessionStatuses.forEach(st => {
                const classname = st.className;

                st.addEventListener('click', () => {
                    setStatusToCheckedRows(classname);
                })
            })

            remarkUpdateField.addEventListener('keyup', () => {
                setRemarksToCheckedRows(remarkUpdateField.value);
            })
        }
    };
});

