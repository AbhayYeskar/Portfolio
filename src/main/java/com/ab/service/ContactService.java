package com.ab.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ab.dto.ContactDTO;
import com.ab.entity.Contact;
import com.ab.repository.ContactRepository;

import java.util.List;

@Service
public class ContactService {
    
    @Autowired
    private ContactRepository contactRepository;
    
    public Contact saveContact(ContactDTO contactDTO) {
        Contact contact = new Contact(
            contactDTO.getName(),    // ← object se call kiya
            contactDTO.getEmail(),   // ← object se call kiya
            contactDTO.getMessage()  // ← object se call kiya
        );
        return contactRepository.save(contact);
    }
    
    public List<Contact> getAllContacts() {
        return contactRepository.findByOrderByCreatedAtDesc();
    }
    
    public Contact getContactById(Long id) {
        return contactRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Contact not found with id: " + id));
    }
    
    public Contact updateStatus(Long id, String status) {
        Contact contact = getContactById(id);
        contact.setStatus(status);
        return contactRepository.save(contact);
    }
    
    public void deleteContact(Long id) {
        Contact contact = getContactById(id);
        contactRepository.delete(contact);
    }
    
    public List<Contact> getContactsByStatus(String status) {
        return contactRepository.findByStatus(status);
    }
}