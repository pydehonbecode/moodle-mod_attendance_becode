<?php
namespace mod_attendance\form;

class studentlocation extends \moodleform {
    public function definition() {
        $mform  =& $this->_form;
        $attforsession = $this->_customdata['session'];

        $locations = array('on_campus' => get_string('oncampus', 'attendance'), 
                           'at_home' => get_string('athome', 'attendance'));
        $mform->addElement('select', 'location', get_string('location', 'attendance'), $locations);
        $mform->addElement('hidden', 'sessid', null);
        $mform->setType('sessid', PARAM_INT);
        $mform->setConstant('sessid', $attforsession->id);
        $this->add_action_buttons();
    }
}