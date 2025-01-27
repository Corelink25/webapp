package com.cornerstonevision.services.cornerstone.services;

import com.cornerstonevision.services.cornerstone.model.Contact;
import com.cornerstonevision.services.cornerstone.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactService {
    @Autowired
    private ContactRepository contactRepository;

    public Contact createContact(Contact contact){
        return contactRepository.save(contact);
    }

    public List<Contact> getContacts(){
        return contactRepository.findAll();
    }
    public Optional<Contact> getContact(Long id){
         return contactRepository.findById(id);
    }
    public void deleteContact(Long id){
        contactRepository.deleteById(id);
    }


}
