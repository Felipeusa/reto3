/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package Repository.CrudRepository;

import Model.Machine;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author Crist
 */
public interface MachineCrudRepository extends CrudRepository<Machine, Integer>{
    
}
