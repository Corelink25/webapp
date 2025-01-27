package com.cornerstonevision.services.cornerstone.controller;

import com.cornerstonevision.services.cornerstone.model.Contact;
import com.cornerstonevision.services.cornerstone.repository.ContactRepository;
import com.cornerstonevision.services.cornerstone.services.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/contacts")
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;
    @Autowired
    private ContactService contactService;

    @PostMapping
    public ResponseEntity<Contact> saveContact(@RequestBody Contact contact) {
        return ResponseEntity.ok().body(contactService.createContact(contact));
    }
    @GetMapping
    public ResponseEntity<List<Contact>> getAllContacts(){
        return ResponseEntity.ok().body(contactService.getContacts());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Contact>> getContact(@PathVariable("id") Long id ){
        return ResponseEntity.ok().body(contactService.getContact(id));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteContact(@PathVariable("id") Long id){
        contactService.deleteContact(id);
        return ResponseEntity.ok().build();
    }
}